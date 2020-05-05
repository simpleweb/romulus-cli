# check if fastlane is installed
isInstalled() {
if hash fastlane 2>/dev/null; then
    echo "Fastlane already installed!"
else
    echo "How do you want to install Fastlane?"
select yn in "RubyGems" "Homebrew"; do
    case $yn in
        RubyGems ) echo "Installing Fastlane via RubyGems (you maybe asked for a password)... "; sudo gem install fastlane -NV ; break;;
        Homebrew ) echo "Installing Fastlane via Homebrew..."; brew install fastlane ; break;;
    esac
    done
fi
};

isInstalled;