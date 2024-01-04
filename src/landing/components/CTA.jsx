



export const CTA = ({color}) => {
  
  // const classes = `bg-${color} text-dark font-medium rounded-xl mx-auto py-3 px-7`;
  const classes = `bg-${color} min-w-64 max-w-64 transition-all block w-full rounded-md px-3 py-3 text-center text-sm font-semibold text-dark shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:lila`;

  return (
      <button className={classes}>Try for free</button>
  )
}