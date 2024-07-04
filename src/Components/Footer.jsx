

const Footer = () => {
    return (
       <div className="max-w-[1300px] mx-auto p-6 ">
         <footer className="footer footer-center bg-base-300 text-base-content p-4 rounded-xl">
        <aside>
          <p>Copyright © ${new Date().getFullYear()} - All right reserved by Owner</p>
        </aside>
      </footer>
       </div>
    );
};

export default Footer;