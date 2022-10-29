const getStyles = () => ({
    title: {
      fontSize: 50,
      padding: '15px',
      fontWeight: 'medium',
      marginBottom: '50px',
      textTransform: 'uppercase'
    }
  })
  
  const Title = ({ title }) => {
    const styles = getStyles()
  
    return (
      <h1 style={styles.title}>PEOPLE AND THEIR CARS</h1>
    );
  }
  
  export default Title