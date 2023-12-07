import { format } from "date-fns";

export interface DateFormatterProps {
	dateString: string;
}

export function DateFormatter({ dateString }: DateFormatterProps) {
	return (
		<time dateTime={dateString}>
			{format(new Date(dateString), "do LLLL, yyyy")}
		</time>
	);
}
