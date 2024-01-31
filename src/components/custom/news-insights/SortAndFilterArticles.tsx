import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  filter: z.string(),
  sort: z.string(),
});

const SortAndFilterArticles = ({
  setFilterArticle,
  setSortArticle,
}: {
  setFilterArticle: (value: string) => void;
  setSortArticle: (value: string) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filter: "all",
      sort: "desc",
    },
  });

  const filterArticles = (value: string) => {
    setFilterArticle(value);
  };

  const sortArticles = (value: string) => {
    setSortArticle(value);
  };

  return (
    <section>
      <Form {...form}>
        <form className="flex flex-row gap-x-4 justify-end items-center">
          <FormField
            control={form.control}
            name="filter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Filter by:</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    filterArticles(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by " />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="all">All Articles</SelectItem>
                    <SelectItem value="News">News</SelectItem>
                    <SelectItem value="Insights">Insights</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sort"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sort by:</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    sortArticles(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by " />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="desc">Newest to Oldest</SelectItem>
                    <SelectItem value="asc">Oldest to Newest</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  );
};

export default SortAndFilterArticles;
