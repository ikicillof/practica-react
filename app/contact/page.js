import Card from "@/components/card";

export default function Contact () {
    const cards = [
        {
            title: "title 1",
            description: "desc 1",
            simple: true
        },
        {
            title: "title 2",
            description: "desc 2"
        },
        {
            title: "title 3",
            description: "desc 3",
            blue: true
        },
        {
            title: "title 4",
            description: "desc 4"
        }
    ]
    return (
        <div>
            {
                //map le aplica una funcion a cada elemento de una lista y te  devuelve una lista del mismo largo de la original con los returns de las funciones
                cards.map(card => {
                    if (card.simple) {
                        return <div>{card.title + " / " + card.description}</div>
                    }
                    return (
                        <Card title={card.title} description={card.description} blue={card.blue}/>
                    )
                })
            }
            <a href="/">Index</a>
        </div>
    )
}