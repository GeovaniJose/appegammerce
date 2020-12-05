import callOfDutyInfiniteWarfare from '../assets/call-of-duty-infinite-warfare.png';
import callOfDutyWWII from '../assets/call-of-duty-wwii.png';
import fifa18 from '../assets/fifa-18.png';
import horizonZeroDawn from '../assets/horizon-zero-dawn.png';
import mortalKombatXL from '../assets/mortal-kombat-xl.png';
import shardsOfDarkness from '../assets/shards-of-darkness.png';
import superMarioOdyssey from '../assets/super-mario-odyssey.png';
import terraMediaSombrasDeMordor from '../assets/terra-media-sombras-de-mordor.png';
import theWitcherIIIWildHunt from '../assets/the-witcher-iii-wild-hunt.png';

const getImageURI = (prodImage: string): any => {
  switch (prodImage) {
    case 'call-of-duty-infinite-warfare.png':
      return callOfDutyInfiniteWarfare;
    case 'call-of-duty-wwii.png':
      return callOfDutyWWII;
    case 'fifa-18.png':
      return fifa18;
    case 'horizon-zero-dawn.png':
      return horizonZeroDawn;
    case 'mortal-kombat-xl.png':
      return mortalKombatXL;
    case 'shards-of-darkness.png':
      return shardsOfDarkness;
    case 'super-mario-odyssey.png':
      return superMarioOdyssey;
    case 'terra-media-sombras-de-mordor.png':
      return terraMediaSombrasDeMordor;
    case 'the-witcher-iii-wild-hunt.png':
      return theWitcherIIIWildHunt;
    default:
      return callOfDutyInfiniteWarfare;
  }
};

export default getImageURI;
