
import './App.css';
import MessageBody from './components/MessageBody';
import ReadMessages from './components/ReadMessages';
import Sidebar from './components/Sidebar';
import ViewMessages from './components/ViewMessages';
import ViewFavorites from './components/ViewFavorites'
import { store } from './store/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [ <Sidebar/>,<MessageBody/>, <ReadMessages/>],
      children: [
        {
          path: "/",
          element: <ViewMessages />,
        },
        {
          path: "/favorites",
          element: <ViewFavorites/>,
        },
      ],
    },
  ]);
  return (
    <div className="flex">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
