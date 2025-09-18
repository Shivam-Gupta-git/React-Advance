import './App.css'
import ContextAPI from './components/ContextAPI'
import ControlledComponents from './components/ControlledComponents'
import UseCustomHook from './components/Custom Hooks/UseCustomHook'
import HigherOrderFunction from './components/HigherOrderFunction'
import Lazyloading from './components/Lazy loading/Lazyloading'
import MountingPhase from './components/Mounting Phase/MountingPhase'
import ClassBasedLIfeCycle from './components/Mounting Phase/MountingPhase'
import PropDrilling from './components/PropDrilling'
import UnmountingPhase from './components/Unmounting Phase/UnmountingPhase'
import UpdatingPhase from './components/Updating Pgase/UpdatingPhase'
import UseEffectHook from './components/UseEffectHook'
import UseMemoHook from './components/UseMemoHook'
import UseStateHook from './components/UseStateHook'
import VirtualDom from './components/VirtualDom'

function App() {


  return (
    <>
      {/* <VirtualDom></VirtualDom> */}
      {/* <UseStateHook></UseStateHook> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <ControlledComponents></ControlledComponents> */}
      {/* <PropDrilling></PropDrilling> */}
      {/* <ContextAPI></ContextAPI> */}
      {/* <HigherOrderFunction></HigherOrderFunction> */}
      {/* <UseCustomHook></UseCustomHook> */}
      {/* <Lazyloading></Lazyloading> */}
      {/* <UseMemoHook></UseMemoHook> */}
      {/* <MountingPhase></MountingPhase> */}
      {/* <UpdatingPhase></UpdatingPhase> */}
      <UnmountingPhase></UnmountingPhase>

    </>
  )
}

export default App
