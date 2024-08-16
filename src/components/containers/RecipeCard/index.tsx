import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@nextui-org/react";
import { Rating } from 'primereact/rating';
import {Timer, UsersRound} from 'lucide-react'

type RecipeCardProps = {
    id: number
    name: string
    thumbnail: string
    prepTimeMinutes: number
    servings: number
    difficulty: string
    ratings: number
}

export default function RecipeCard({
    id,
    name,
    thumbnail,
    prepTimeMinutes,
    servings,
    difficulty,
    ratings,
}: RecipeCardProps): JSX.Element {
    return (
        <Card className="h-[540px] w-[300px]" isPressable isHoverable>
            <CardHeader className="p-0 h-[280px] relative overflow-visible">
                <span className="rounded-2xl bg-red-500/80 px-4 py-2 absolute right-4 -bottom-4 z-50 text-sm text-white font-semibold" >{difficulty}</span>
                <Image
                    src={thumbnail}
                    alt="Card thumbnail"
                    className="w-full h-full object-cover"
                    removeWrapper
                    loading="eager"
                />
            </CardHeader>
            <CardBody>
                <div className="flex items-center gap-2">
                    <Rating
                        readOnly
                        value={ratings}
                        stars={5}
                        cancel={false}
                    />
                    <span className="italic font-semibold text-[15px]">{ratings}</span>
                </div>
                <h1 className="mt-4 text-2xl font-bold break-words leading-relaxed">{name}</h1>
                <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-start gap-1">
                        <Timer size={17}/>
                        <span className="text-sm">{prepTimeMinutes} mins</span>
                    </div>
                    <div className="flex items-start gap-1">
                        <UsersRound size={17}/>
                        <span className="text-sm">{servings} people</span>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="flex justify-center">
                <Button
                    as={Link}
                    href={`#${id}`}
                    className="flex-grow font-semibold"
                    color="secondary"
                    variant="shadow"
                >
                    View recipe
                </Button>
            </CardFooter>
        </Card>
    )
}