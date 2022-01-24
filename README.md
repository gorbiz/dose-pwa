# Setup dev server
```sh
# consider making this a devDependency
npm i -g http-server

# We also need SSL
sudo pacman -Syu mkcert
mkcert -install
mkdir -p .ssl
echo .ssl >> .gitignore
mkcert -key-file .ssl/key.pem -cert-file .ssl/cert.pem dose.dev
# add dose.dev to /etc/hosts

http-server --ssl --cert .ssl/cert.pem --key .ssl/key.pem
# Open https://dose.dev:8080
```

# Generate icons
```sh
npm run make-icons
```
Not sure which sizes are needed, maybe 192, 512 are enough: https://github.com/GoogleChrome/lighthouse/issues/291
Also, `dose.webmanifest` needs to be manually updated.
