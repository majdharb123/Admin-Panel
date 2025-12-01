import { ShoppingCart, DollarSign, Users, TrendingUp } from "lucide-react";
const stats = [
  {
    id: 1,
    title: "Total Orders",
    value: "519",
    change: "+12%",
    icon: <ShoppingCart className="text-white" size={24} />,
    color: "bg-primary p-3 rounded",
  },
  {
    id: 2,
    title: "Daily Income",
    value: "$8,500",
    change: "+8%",
    icon: <DollarSign className="text-white" size={24} />,
    color: "bg-success p-3 rounded",
  },
  {
    id: 3,
    title: "New Users",
    value: "234",
    change: "+23%",
    icon: <Users className="text-white" size={24} />,
    color: "bg-secondary p-3 rounded",
  },
  {
    id: 4,
    title: "Performance",
    value: "94%",
    change: "+5%",
    icon: <TrendingUp className="text-white" size={24} />,
    color: "bg-warning p-3 rounded",
  },
];
export default stats