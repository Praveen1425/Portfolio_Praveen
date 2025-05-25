import Image from "next/image";
import { Achievement } from "@/lib/achievements-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  achievement: Achievement;
}

const AchievementCard = ({ achievement }: Props) => {
  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src={achievement.image}
        alt={achievement.title}
        width={400}
        height={200}
        className="w-full h-48 object-contain p-4"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-primary font-medium mb-4">
          {achievement.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        {achievement.certificate && (
          <a
            href={achievement.certificate}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="text-sm">
              View Certificate
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
