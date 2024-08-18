import { Input } from "@/components/ui/input";
export default function Contact() {
  return (
    <div className="flex flex-col justify-end min-h-full">
      <Input
        className="bg-slate-900 text-white"
        placeholder="Send Message..."
      />
    </div>
  );
}
