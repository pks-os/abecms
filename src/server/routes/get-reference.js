import fs from 'fs-extra'
import path from 'path'

import {
	Manager,
  coreUtils,
  config,
  Handlebars
} from '../../cli'

var route = function(req, res){
  var manager = {}
  manager.home = {files: []}
  manager.list = Manager.instance.getStructureAndTemplates()
  manager.config = JSON.stringify(config)

  var isHome = true
  var jsonPath = null
  var linkPath = null
  var template = null
  var fileName = null
  var folderPath = null

  var EditorVariables = {
    user: res.user,
    slugs: Manager.instance.getSlugs(),
    abeUrl: '/abe/editor/',
    Locales: coreUtils.locales.instance.i18n,
    manager: manager,
    config: JSON.stringify(config),
    reference: Manager.instance.getReferences()
  }
  res.render('../views/list-references.html', EditorVariables)
}

export default route
