import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AdminProfile from "./pages/AdminProfile";
import AdminSermons from "./pages/AdminSermons";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/admin/profile" element={<ProtectedRoute><AdminProfile /></ProtectedRoute>} />
            <Route path="/admin/sermons" element={<ProtectedRoute requireAdmin><AdminSermons /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
