import data from "@/data/Config";
import Template from "../Template";
import { Button, Link, Section, Text } from "@react-email/components";

const Mentor = ({ name, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text>
        🎉 Congratulations 🎉 You have been accepted into {data.name} as a{" "}
        <strong>mentor</strong>
      </Text>
      <Text>
        Thank you so much for your interest in becoming a mentor for DesignVerse
        2024! We are delighted to have you be part of this journey with us for
        our first-ever Design-a-Thon at UCR!
      </Text>
      <Text>
        With this event coming up soon, we would like to check in to confirm
        that you will still be joining us on Saturday, May 11th, 2024 & Sunday,
        May 12th, 2024! (You do not have to stay the entire time if you are not
        able to! Please let us know if you will only be able to stay for a
        certain amount of time.)
      </Text>
      <Text>
        Once you have confirmed with us, we will send over all logistics for
        this event (i.e. mentor office hours, locations, etc).
      </Text>
      <Text>
        If you are still available to join us, please be sure to email{" "}
        <Link
          href={`mailto:${data.email}`}
          className="text-[#64922E] font-semibold"
        >
          designverseucr@gmail.com
        </Link>{" "}
        at your earliest convenience. We will be making individualized posts for
        each of you. If you are comfortable with this, please send us your
        current role, headshot, and a blurb about you!
      </Text>
      <Text>
        We will be using Discord as our primary communication platform regarding
        announcements, events, workshops, activities, and more!
      </Text>
      <Section className="text-center">
        <Button
          href={data.discord}
          className="bg-[#7289da] rounded text-white text-xs font-semibold no-underline text-center px-5 py-3"
        >
          Join Discord
        </Button>
      </Section>
      <Text>We look forward to seeing you there!</Text>
    </Template>
  );
};

export default Mentor;
