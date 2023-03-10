"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _servers = require("./core/servers");
var _constants = require("./core/constants");
var _house = require("./pods/house");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const restApiServer = (0, _servers.createRestApiServer)();
const staticFilesPath = _path.default.resolve(__dirname, _constants.envConstants.STATIC_FILES_PATH);
restApiServer.use("/", _express.default.static(staticFilesPath));
restApiServer.use(async (req, res, next) => {
  console.log(req.url);
  next();
});
restApiServer.use("/api/houses", _house.housesApi);
restApiServer.listen(_constants.envConstants.PORT, async () => {
  if (!_constants.envConstants.isApiMock) {
    await (0, _servers.connectToDBServer)(_constants.envConstants.MONGODB_URI);
    console.log("Connected to DB");
  } else {
    console.log('Running API mock');
  }
  console.log(`Server ready at port 3000 ${_constants.envConstants.PORT}`);
});