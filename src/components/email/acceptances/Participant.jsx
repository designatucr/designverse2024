import data from "@/data/Config";
import Template from "../Template";
import { Button, Link, Section, Text } from "@react-email/components";

const Participant = ({ name, preview }) => {
  return (
    <Template name={name} preview={preview}>
      <Text>
        🎉 Congratulations 🎉 You have been accepted into {data.name} as a{" "}
        <strong>participant</strong>
      </Text>
      <Text>
        Thank you so much for your interest in joining DesignVerse in our very
        first Designathon. We are delighted to have you be part of our event!
      </Text>
      <Text>
        With this event coming up on May 11th and 12th, here are a few details
        to note!
      </Text>
      <Text>
        <strong>Locations:</strong> DesignVerse will begin at 8:00 AM at the
        Highlander Union Building Room 302. There will be a few changes in
        location; however, please rest assured that designated guides will be
        available to direct you to the appropriate venues as needed.
      </Text>
      <Text>
        <strong>General Timeline:</strong> Doors will open at 8:00 AM, Saturday
        May 11th with an opening ceremony and students will be able to work on
        their projects until 9:00 AM, Sunday May 12th. Submissions that are past
        the deadline will not be considered. Judging will begin around 9:05 AM
        and our event will close with a closing ceremony!
      </Text>
      <Text>
        <strong>Food: </strong>
        Breakfast, lunch, and dinner will be provided for. Lunch and Dinner will
        be provided on May 11th and Breakfast on May 12th.
      </Text>
      <Text>
        For any questions or concerns, please contact{" "}
        <Link
          href={`mailto:${data.email}`}
          className="text-[#64922E] font-semibold"
        >
          designverseucr@gmail.com
        </Link>
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

export default Participant;
