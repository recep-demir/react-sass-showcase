import "./App.scss"
import AppRouter from "./router/AppRouter";
function App() {
  return (
    // <RouterProvider
    //   router={router}
    //   fallbackElement={<div>Loading...</div>}
    // />// yeni versiyonla oluşturulmuş router yapısı
    <AppRouter/> // eski versiyon
  );
}

export default App;
