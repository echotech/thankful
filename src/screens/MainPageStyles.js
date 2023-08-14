import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#EAEAEA',
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: '#FF6B6B',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#EAEAEA',
    backgroundColor: '#3A3F4B',
  },
  buttonContainer: {
    width: '60%',
  }
});

export default styles;
