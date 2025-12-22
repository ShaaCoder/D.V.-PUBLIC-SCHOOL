import Programs from '@/components/academics/Programs';
import Curriculum from '@/components/academics/Curriculum';
import CoCurrenticular from '@/components/academics/CoCurrenticular';

export const metadata = {
  title: 'Academics - DV Public School',
  description: 'Explore our comprehensive academic programs from Primary to Senior Secondary education',
};

export default function Academics() {
  return (
    <div className="pt-20">
      <Programs />
      {/* <Curriculum /> */}
      <CoCurrenticular />
    </div>
  );
}