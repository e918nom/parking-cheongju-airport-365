import HomeBanner from '@/features/home/HomeBanner';
import HomeBookingList from '@/features/home/HomeBookingList';
import HomeHowto from '@/features/home/HomeHowto';
import HomeMain from '@/features/home/HomeMain';
import HomePriceInfo from '@/features/home/HomePriceInfo';
import HomePriceSearch from '@/features/home/HomePriceSearch';

export default function HomePage() {
  return (
    <>
      <HomeMain />
      <HomePriceSearch />
      <HomeBookingList />
      <HomePriceInfo />
      <HomeHowto />
      <HomeBanner />
    </>
  );
}
