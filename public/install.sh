#!/bin/sh

set -eu

readonly repository="solvePao/Cleanoli-Web"
readonly base_url="https://github.com/$repository/releases/latest/download"
readonly dmg_name="Cleanoli.dmg"
download_dir=$(mktemp -d "${TMPDIR:-/tmp}/cleanoli-install.XXXXXX")
mount_point=""

cleanup() {
  if [ -n "$mount_point" ]; then hdiutil detach "$mount_point" -quiet || true; fi
  rm -rf "$download_dir"
}
trap cleanup EXIT HUP INT TERM

curl --fail --location --silent --show-error "$base_url/$dmg_name" --output "$download_dir/$dmg_name"

install_dir=${CLEANOLI_INSTALL_DIR:-"$HOME/Applications"}
mkdir -p "$install_dir"
mount_point=$(hdiutil attach -nobrowse -readonly "$download_dir/$dmg_name" | awk '/\/Volumes\// { print substr($0, index($0, "/Volumes/")); exit }')
if [ -z "$mount_point" ] || [ ! -d "$mount_point/Cleanoli.app" ]; then
  printf '%s\n' "Cleanoli: mounted DMG did not contain the application" >&2
  exit 1
fi
ditto "$mount_point/Cleanoli.app" "$install_dir/Cleanoli.app"
printf '%s\n' "Installed Cleanoli to $install_dir/Cleanoli.app"
