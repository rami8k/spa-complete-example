export async function importApp(app, shareScope, importedApps) {
  let appParts = getAppParts(app)

  return System.import(appParts.app).then(app => {

    if (!importedApps.includes(appParts.app)) {
      app.init(shareScope)
    }
    
    if (appParts.module) {
      return app.get(appParts.module).then(module => {
        return module()
      })
    } else {
      return app
    }
  })
}

function getAppParts(app) {
  let appParts = app.split('/')

  if (app.startsWith('@')) {

    if (appParts.length > 2) {
      return {
        app: `${appParts[0]}/${appParts[1]}`,
        module: appParts.length > 2 ? appParts[2] : null
      }
    }
  }

  return {
    app: appParts[0],
    module: appParts[1]
  }
}