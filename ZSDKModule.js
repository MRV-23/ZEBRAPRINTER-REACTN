/**
* This imports the native ZSDK module as a JS module.
*/
import { NativeModules } from 'react-native';
const { ZSDKModule } = NativeModules;
console.log('Nativemodules' ,NativeModules)
console.log('ZSDK TRAE ---- ',ZSDKModule)
export default ZSDKModule;