import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card :</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1080,q_auto',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={{color: 'black'}}>
            JavaScript is a high-level, interpreted programming language. It is
            a text-based programming language that conforms to the ECMAScript
            standard. JavaScript is one of the three core technologies of the
            World Wide Web, along with HTML and CSS. JavaScript is used to make
            web pages interactive. It can add animation, interactivity, and
            games to web pages. JavaScript can also be used to validate forms,
            send and receive data from a server, and update web pages without
            reloading them. JavaScript is a relatively easy language to learn.
            It is a popular language for beginners, and it is also used by
            professional web developers.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://x.com/are_you_khushh')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    padding: 15,
    fontWeight: 'bold',
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
  elevatedCard: {
    backgroundColor: 'orange',
    borderRadius: 6,
    elevation: 6,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 5,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 8
  },
  socialLinks: {
    fontSize: 14,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8,
    fontWeight: '700'
  },
});
