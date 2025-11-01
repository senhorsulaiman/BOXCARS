
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { ToastContainer } from 'react-toastify'


const queryClient=new QueryClient();
createRoot(document.getElementById('root')).render(


    <Provider store={store}>
         <App />
         <ToastContainer/>
    </Provider>
    // <AppProvider>

    //      <QueryClientProvider client={queryClient}>

    //     <ReactQueryDevtools initialIsOpen={true} ></ReactQueryDevtools>
    //     </QueryClientProvider>

    // </AppProvider>





)
