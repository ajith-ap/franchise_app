import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppAppBar} from '../../components/AppAppBar';
import {Colors} from '../../assets/colors';
import {CONTENT_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import SizedBox from '../../components/SizedBox';

type Props = {};

const TAndC = (props: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.settingsHeaderColor} />
      <AppAppBar appName color={Colors.settingsHeaderColor} />
      <View
        style={{
          width: WIN_WIDTH,
          height: 40,
          backgroundColor: Colors.settingsHeaderColor,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
            color: Colors.white,
          }}>
          Terms & Conditions
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <Text style={styles.heading}>Introduction</Text>
        <Text style={styles.contentText}>
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our website, Webiste Name accessible at
          Website.com. These Terms will be applied fully and affect to your use
          of this Website. By using this Website, you agreed to accept all terms
          and conditions written in here. You must not use this Website if you
          disagree with any of these Website Standard Terms and Conditions.
          Minors or people below 18 years old are not allowed to use this
          Website.Intellectual Property Rights Other than the content you own,
          under these Terms, Company Name and/or its licensors all the
          intellectual property rights and materials contained in this Website.
          You are granted limited license only for purposes of viewing the
          material contained on this Website. Restrictions{'\n'}You are
          specifically restricted from all of the following:
        </Text>
        <Text style={styles.contentText}>• publishing any Website material in any other media;</Text>
        <Text style={styles.contentText}>
          • selling, sublicensing and/or otherwise commercializing any Website
          material;
        </Text>
        <Text style={styles.contentText}>• publicly performing and showing any Website material</Text>
        <Text style={styles.contentText}>
          • using this Website in any way that is or may be damaging to this
          Website;
        </Text>
        <Text style={styles.contentText}>
          • using this Website in any way that impacts user access to this
          Website;
        </Text>
        <Text style={styles.contentText}>
          • using this Website contrary to applicable laws and regulations, or
          in any way may cause harm to the Website, or to any person or business
          entity;
        </Text>
        <Text style={styles.contentText}>
          • engaging in any data mining, data harvesting, data extracting or any
          other similar activity in relation to this
        </Text>
        <Text style={styles.contentText}>
          • using this Website to engage in any advertising or marketing.
        </Text>

        <Text style={styles.contentText}>
          Certain areas of this Website are restricted from being access by you
          and Company Name may further restrict access by you to any areas of
          this Website, at any time, in absolute discretion. Any user ID and
          password you may have for this Website are confidential and you must
          maintain confidentiality as well.Your Content In these Website
          Standard Terms and Conditions, “Your Content” shall mean any audio,
          video text, images or other material you choose to display on this
          Website. By displaying Your Content, you grant Company Name a
          non-exclusive, worldwide irrevocable, sub licensable license to use,
          reproduce, adapt, publish, translate and distribute it in any and all
          media. Your Content must be any third-party's rights. Company Name
          reserves the right to remove any of Your Content from this Website at
          any time without notice. No warranties This Website is provided “as
          is,” with all faults, and Company e non-exclusive jurisdiction the
          state and federal courts located in Country for the resolution of any
          disputes.
        </Text>
        <SizedBox height={50} />
      </ScrollView>
    </View>
  );
};

export default TAndC;

const styles = StyleSheet.create({
  container: {
    height: CONTENT_HEIGHT,
  },
  content: {height: CONTENT_HEIGHT - 80, padding: 20},
  heading: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    color:Colors.text10
  },
  contentText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    // marginBottom: 10,
    // lineHeight:5,
    color:Colors.text10
  },
});
