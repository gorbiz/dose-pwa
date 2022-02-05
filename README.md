⚠️⚠️⚠️ WARNING moved to https://github.com/gorbiz/dose

# Setup dev server
Requirements:
 - `mkcert` ex. `sudo pacman -Syu mkcert`
 - `127.0.0.1  dose.dev` in `/etc/hosts

```sh
npm install
npm start
# And open https://dose.dev:8080 (or whichever is rePORTed)
```

# Deploy to test server

```sh
rsync -avzh --exclude .git --exclude node_modules * cloud:dev.lifefeed.me
```
# Generate icons
```sh
npm run make-icons
```
Not sure which sizes are needed, maybe 192, 512 are enough: https://github.com/GoogleChrome/lighthouse/issues/291
Also, `dose.webmanifest` needs to be manually updated.
