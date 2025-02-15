import Card from "./index.jsx";
//Cards
import card1 from '/src/assets/card-photos/1.png'
import card2 from '/src/assets/card-photos/2.png';
import card3 from '/src/assets/card-photos/3.png';
import card4 from '/src/assets/card-photos/4.png';
import card5 from '/src/assets/card-photos/5.png';
import card6 from '/src/assets/card-photos/6.png';
import card7 from '/src/assets/card-photos/7.png';
import card8 from '/src/assets/card-photos/8.png';
import card9 from '/src/assets/card-photos/9.png';

//Avatars
import ava1 from '/src/assets/ava-photos/1.png';
import ava2 from '/src/assets/ava-photos/2.png';
import ava3 from '/src/assets/ava-photos/3.png';
import ava4 from '/src/assets/ava-photos/4.png';
import ava5 from '/src/assets/ava-photos/5.png';
import ava6 from '/src/assets/ava-photos/6.png';
import ava7 from '/src/assets/ava-photos/7.png';
import ava8 from '/src/assets/ava-photos/8.png';
import ava9 from '/src/assets/ava-photos/9.png';

const CardHolder = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Baris-1 */}
            <div className="grid gap-6">
                <Card
                    image={card1}
                    ava={ava1}
                />
                <Card
                    image={card4}
                    ava={ava4}
                />
                <Card
                    image={card7}
                    ava={ava7}
                />
            </div>
            {/* Card Baris-2 */}
            <div className="grid gap-6">
                <Card
                    image={card2}
                    ava={ava2}
                />
                <Card
                    image={card5}
                    ava={ava5}
                />
                <Card
                    image={card8}
                    ava={ava8}
                />
            </div>
            {/* Card Baris-3 */}
            <div className="grid gap-6">
                <Card
                    image={card3}
                    ava={ava3}
                />
                <Card
                    image={card6}
                    ava={ava6}
                />
                <Card
                    image={card9}
                    ava={ava9}
                />
            </div>
        </div>
    )
}

export default CardHolder;
