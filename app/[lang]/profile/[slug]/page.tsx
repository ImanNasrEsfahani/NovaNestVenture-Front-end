import Profile from '@/components/profile/Profile';


export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <Profile slug={slug} />
  );
}
