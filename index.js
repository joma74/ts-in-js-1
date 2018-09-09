/**
 * @typedef {import("./clazz1a")} Clazz1a
 */

 var clazz1a = require("./clazz1a")
 var clazz1b = require("./clazz1b")

 var clazz1aInstance = new clazz1a();
 var clazz1bInstance = new clazz1b(clazz1aInstance);

 /**
 * ISSUE getErrorAsString is NOT infered from types/global.d.ts
 */
if(global.getErrorAsString) {
	global.getErrorAsString(new Error("abc"));
}

 /**
  * ISSUE clazz1bGlobalVar is implicitly defined? Is NOT infered from types/global.d.ts
  */
global.clazz1bGlobalVar= "clazz1bInstance"



module.exports={clazz1bInstance}