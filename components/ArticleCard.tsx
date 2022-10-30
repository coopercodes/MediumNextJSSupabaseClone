import { NextPage } from "next";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Card, Text } from "@nextui-org/react";

interface Props {
    article: any
}

const ArticleCard: NextPage<Props> = (props) => {
    const router = useRouter();
    const { article } = props;
    // inserted_at date string
    // console.log(inserted_at)

    function getDate() { // dd--mm--yyyy
        let time = Date.parse(article.inserted_at);
        let date = new Date(time);
        
        return date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear();
    }

    return (
        <Card
            isPressable
            css={{mb: "$10"}}
            onPress={() => router.push("/article?id=" + article.id)}
        >
            <Card.Body>
                <Text h2>{article.title}</Text>
                <Text b>posted {getDate()}</Text>
                <Text b>By {article.user_email.toLowerCase()}</Text>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;