import { P } from "cadells-vanilla-components";
import { format } from "date-fns";

export interface DateFormatterProps {
	dateString: string;
}

export function DateFormatter({ dateString }: DateFormatterProps) {
	return (
		<P>
			<time dateTime={dateString}>
				{format(new Date(dateString), "eo LLLL, yyyy")}
			</time>
		</P>
	);
}
