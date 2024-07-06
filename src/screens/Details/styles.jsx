import { StyleSheet } from 'react-native';

const DetailScreenStyles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  detailImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
    backgroundColor: 'gray',
  },
  detailTitle: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailPrice: {
    fontSize: 22,
    color: '#00c6ff',
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 18,
    color: '#bbb',
    marginBottom: 20,
  },
  otherDetails: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  data: {
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  map: {
    height: 200,
    borderRadius: 30,
  },
  imageThumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: 'gray',
  },
});

export default DetailScreenStyles;
