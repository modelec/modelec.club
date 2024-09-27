import React from "react";
import { Navbar } from "../components/navbar/navbar";
import {Footer} from "../components/footer/footer.tsx";

const NotFound: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>404 - Page Not Found</h1>
            <p>La page à laquel vous essayez d'accéder n'est pas disponible pour le moment, veuillez revenir plus tard.</p>
            <p>Le site est comme nous, il expériemente en continu.</p>
            <Footer />
        </div>
    );
}

export default NotFound