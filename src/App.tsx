import "./App.css";

import { Header } from "./components/header/Header";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { PriceSection } from "./components/Price/PriceSection";
import { Contacts } from "./components/Contacts/Contacts";
import { EmailForm } from "./components/EmailForm/EmailForm";
import { Route, Routes } from "react-router";
import { AdminPage } from "./components/AdminPage/AdminPage";
import { MainSection } from "./components/MainSection/MainSection";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route
                path="/"
                element={
                    <div className="App">
                        <div>
                            <Header />
                            <MainSection />

                            <AboutSection />
                            <PriceSection />
                            <EmailForm />
                            <Contacts />
                            <Footer />
                        </div>
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
