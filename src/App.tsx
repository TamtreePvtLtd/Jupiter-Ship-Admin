import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FontSize from "./Pages/FontSize";
import FontFamily from "./Pages/FontFamily";
import ButtonColor from "./Pages/ButtonColor";
import Backgroundcolor from "./Pages/BackgroundColor";
import TextColor from "./Pages/TextColor";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FontSize />
      <FontFamily />
      <ButtonColor />
      <Backgroundcolor />
      <TextColor/>
    </QueryClientProvider>
  );
}

export default App;
