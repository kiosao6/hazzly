



export const Footer = () => {

  const link = "https://dribbble.com/shots/21331912-Mobile-App-Landing-Page"
  return (
    <footer>
      <p className="text-xs mx-8 leading-6 py-5 text-center text-gray-text">Developed by <a className="font-semibold hover:underline" href="https://www.gabrielmaestre.com">Gabriel Maestre</a> - Design inspiration by <a className="hover:underline" target="blank" href={link}>Ronas IT | UI/UX Team</a></p>
    </footer>
  )
}