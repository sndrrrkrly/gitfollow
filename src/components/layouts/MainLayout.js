export const MainLayout = (props) => {
     const { children } = props;

     return (
          <body className = 'bg-gray-300 w-full inline-flex md:justify-between md:text-left justify-center'>
               <div className = 'container mx-auto max-w-3xl w-auto h-screen'>
                    <main className = 'flex-grow'>
                         { children }
                    </main>
               </div>
          </body>
     );
};