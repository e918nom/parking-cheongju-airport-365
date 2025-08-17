import BasicLayout from '@/components/Layouts/BasicLayout';

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <BasicLayout>{children}</BasicLayout>;
}
