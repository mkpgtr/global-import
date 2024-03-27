// globalImports.js
import { toast } from 'react-toastify';
import reactLogo from './src/assets/react.svg'  
import { useState } from 'react'

// Attach toast to the global/window object
globalThis.toast = toast;
globalThis.reactLogo = reactLogo
globalThis.useState = useState
