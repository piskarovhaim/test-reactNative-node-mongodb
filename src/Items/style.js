import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors'

const styles = StyleSheet.create({
    inputContainer: {
        padding: 20,
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      textInput: {
        height: 30,
        width:150,
        fontSize: 15,
      },
      saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: 'black',
        margin: 5,
        color: '#FFFFFF',
        fontSize: 70,
        textAlign: 'center'
      },
      Paginate: {
        flexDirection:'row',
        justifyContent: 'center',
        margin: 10,
        textAlign: 'center'
      },
      item: {
        backgroundColor: Colors.accent,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      itemText: {
        fontSize: 12,
      },
      itemButton:{
        width: 30
      }

  });

  export default styles;