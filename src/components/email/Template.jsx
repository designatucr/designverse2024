import data from "@/data/Config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from "@react-email/components";

const Template = ({ children, name, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px] bg-[#BBDEE6]">
            <Section className="mt-[32px]">
              <Img
                src="https://media.discordapp.net/attachments/1092027859394105426/1236792335556149339/image.png?ex=66394c1f&is=6637fa9f&hm=f92a258ea94d7b6688ebc79779ca59131f4d23ac0e1358c8f35f6699d523821b&=&format=png&quality=lossless&width=1182&height=482"
                width="150"
                height="70"
                alt="Logo"
                className="my-0 mx-auto"
              />
              <Text className="text-[#64922E] text-[14px] leading-[24px] text-right font-bold">
                May 11-12, 2024
              </Text>
            </Section>

            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Thank you for applying!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello <strong>{name}</strong>,
            </Text>
            {children}
            <Text>
              - {data.name} Team {data.heart}
            </Text>
            <Hr className="border border-solid border-white my-[26px] mx-0 w-full" />
            <Text>
              Visit{" "}
              <Link href={data.domain} className="text-[#64922E] font-semibold">
                designverseucr.org
              </Link>{" "}
              for more information about {data.name} and follow us on{" "}
              <Link
                href={data.instagram}
                className="text-[#64922E] font-semibold"
              >
                Instagram
              </Link>{" "}
              and{" "}
              <Link
                href={data.linkedin}
                className="text-[#64922E] font-semibold"
              >
                Linkedin
              </Link>{" "}
              for up to date information and announcements.
            </Text>
            <Text className="text-black text-xs leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-[#64922E] font-semibold">{name}</span>. If
              you were not expecting this email, you can ignore this email. If
              you are concerned about your account&apos;s safety, please contact{" "}
              <Link
                href={`mailto:${data.email}`}
                className="text-[#64922E] font-semibold"
              >
                designverseucr@gmail.com
              </Link>{" "}
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;
