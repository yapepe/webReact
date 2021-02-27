import './assets/Footer.css'

  export default function Footer({texto, logo}) {
      return (
        <div className="footer">
            <h1>©Solipsi Rai 2021</h1>
            <img src={logo} alt="Logo" />
        </div>
      );
    }