import image from './background.jpg'

const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '280px',
      height: '330px',
      padding: '12px 92px',
      background: '#ffffff',
      // position: 'absolute',
      top: '22 %',
      right: '10 %',
      boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    },
    background: {
      backgroundImage: `url(${image})`,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    formWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    title: {
      display: 'flex',
      alignItems: 'center',    
    }
  };

  export default styles