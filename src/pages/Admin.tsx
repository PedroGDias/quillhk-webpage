import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Building2, Users, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import craftedLogo from '@/assets/crafted_logo_highres_blue_v2.png';
import { FloatingLinkedInLogos } from '@/components/FloatingLinkedInLogos';

interface Company {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

interface TeamMember {
  id: string;
  company_id: string;
  name: string;
  email: string;
  whatsapp_number: string;
  created_at: string;
  updated_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    whatsapp_number: '',
    country_code: '+1',
    company_id: ''
  });
  const [isAddCompanyOpen, setIsAddCompanyOpen] = useState(false);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [companySearch, setCompanySearch] = useState('');
  const [memberSearch, setMemberSearch] = useState('');
  const { toast } = useToast();

  const ADMIN_PASSWORD = 'gocraftedtech9911';

  // Filter companies and team members based on search
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(companySearch.toLowerCase())
  );

  const filteredTeamMembers = teamMembers.filter(member => {
    const company = companies.find(c => c.id === member.company_id);
    const companyName = company ? company.name.toLowerCase() : '';
    const searchTerm = memberSearch.toLowerCase();
    
    return (
      member.name.toLowerCase().includes(searchTerm) ||
      member.email.toLowerCase().includes(searchTerm) ||
      member.whatsapp_number.toLowerCase().includes(searchTerm) ||
      companyName.includes(searchTerm)
    );
  });

  const countryCodes = [
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+39', country: 'Vatican City', flag: '🇻🇦' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+53', country: 'Cuba', flag: '🇨🇺' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
    { code: '+98', country: 'Iran', flag: '🇮🇷' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+220', country: 'Gambia', flag: '🇬🇲' },
    { code: '+221', country: 'Senegal', flag: '🇸🇳' },
    { code: '+222', country: 'Mauritania', flag: '🇲🇷' },
    { code: '+223', country: 'Mali', flag: '🇲🇱' },
    { code: '+224', country: 'Guinea', flag: '🇬🇳' },
    { code: '+225', country: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+227', country: 'Niger', flag: '🇳🇪' },
    { code: '+228', country: 'Togo', flag: '🇹🇬' },
    { code: '+229', country: 'Benin', flag: '🇧🇯' },
    { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
    { code: '+231', country: 'Liberia', flag: '🇱🇷' },
    { code: '+232', country: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+235', country: 'Chad', flag: '🇹🇩' },
    { code: '+236', country: 'Central African Republic', flag: '🇨🇫' },
    { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
    { code: '+238', country: 'Cape Verde', flag: '🇨🇻' },
    { code: '+239', country: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { code: '+240', country: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+241', country: 'Gabon', flag: '🇬🇦' },
    { code: '+242', country: 'Republic of the Congo', flag: '🇨🇬' },
    { code: '+243', country: 'Democratic Republic of the Congo', flag: '🇨🇩' },
    { code: '+244', country: 'Angola', flag: '🇦🇴' },
    { code: '+245', country: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+246', country: 'British Indian Ocean Territory', flag: '🇮🇴' },
    { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+252', country: 'Somalia', flag: '🇸🇴' },
    { code: '+253', country: 'Djibouti', flag: '🇩🇯' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
    { code: '+256', country: 'Uganda', flag: '🇺🇬' },
    { code: '+257', country: 'Burundi', flag: '🇧🇮' },
    { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
    { code: '+260', country: 'Zambia', flag: '🇿🇲' },
    { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
    { code: '+262', country: 'Réunion', flag: '🇷🇪' },
    { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+265', country: 'Malawi', flag: '🇲🇼' },
    { code: '+266', country: 'Lesotho', flag: '🇱🇸' },
    { code: '+267', country: 'Botswana', flag: '🇧🇼' },
    { code: '+268', country: 'Swaziland', flag: '🇸🇿' },
    { code: '+269', country: 'Comoros', flag: '🇰🇲' },
    { code: '+290', country: 'Saint Helena', flag: '🇸🇭' },
    { code: '+291', country: 'Eritrea', flag: '🇪🇷' },
    { code: '+297', country: 'Aruba', flag: '🇦🇼' },
    { code: '+298', country: 'Faroe Islands', flag: '🇫🇴' },
    { code: '+299', country: 'Greenland', flag: '🇬🇱' },
    { code: '+350', country: 'Gibraltar', flag: '🇬🇮' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' },
    { code: '+355', country: 'Albania', flag: '🇦🇱' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+373', country: 'Moldova', flag: '🇲🇩' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+376', country: 'Andorra', flag: '🇦🇩' },
    { code: '+377', country: 'Monaco', flag: '🇲🇨' },
    { code: '+378', country: 'San Marino', flag: '🇸🇲' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+381', country: 'Serbia', flag: '🇷🇸' },
    { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
    { code: '+383', country: 'Kosovo', flag: '🇽🇰' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+387', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+389', country: 'North Macedonia', flag: '🇲🇰' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+500', country: 'Falkland Islands', flag: '🇫🇰' },
    { code: '+501', country: 'Belize', flag: '🇧🇿' },
    { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
    { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
    { code: '+504', country: 'Honduras', flag: '🇭🇳' },
    { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
    { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
    { code: '+507', country: 'Panama', flag: '🇵🇦' },
    { code: '+508', country: 'Saint Pierre and Miquelon', flag: '🇵🇲' },
    { code: '+509', country: 'Haiti', flag: '🇭🇹' },
    { code: '+590', country: 'Guadeloupe', flag: '🇬🇵' },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
    { code: '+592', country: 'Guyana', flag: '🇬🇾' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+594', country: 'French Guiana', flag: '🇬🇫' },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
    { code: '+596', country: 'Martinique', flag: '🇲🇶' },
    { code: '+597', country: 'Suriname', flag: '🇸🇷' },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
    { code: '+599', country: 'Netherlands Antilles', flag: '🇧🇶' },
    { code: '+670', country: 'East Timor', flag: '🇹🇱' },
    { code: '+672', country: 'Antarctica', flag: '🇦🇶' },
    { code: '+673', country: 'Brunei', flag: '🇧🇳' },
    { code: '+674', country: 'Nauru', flag: '🇳🇷' },
    { code: '+675', country: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+676', country: 'Tonga', flag: '🇹🇴' },
    { code: '+677', country: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+678', country: 'Vanuatu', flag: '🇻🇺' },
    { code: '+679', country: 'Fiji', flag: '🇫🇯' },
    { code: '+680', country: 'Palau', flag: '🇵🇼' },
    { code: '+681', country: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: '+682', country: 'Cook Islands', flag: '🇨🇰' },
    { code: '+683', country: 'Niue', flag: '🇳🇺' },
    { code: '+684', country: 'American Samoa', flag: '🇦🇸' },
    { code: '+685', country: 'Samoa', flag: '🇼🇸' },
    { code: '+686', country: 'Kiribati', flag: '🇰🇮' },
    { code: '+687', country: 'New Caledonia', flag: '🇳🇨' },
    { code: '+688', country: 'Tuvalu', flag: '🇹🇻' },
    { code: '+689', country: 'French Polynesia', flag: '🇵🇫' },
    { code: '+690', country: 'Tokelau', flag: '🇹🇰' },
    { code: '+691', country: 'Micronesia', flag: '🇫🇲' },
    { code: '+692', country: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+850', country: 'North Korea', flag: '🇰🇵' },
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+853', country: 'Macau', flag: '🇲🇴' },
    { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
    { code: '+856', country: 'Laos', flag: '🇱🇦' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
    { code: '+960', country: 'Maldives', flag: '🇲🇻' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+963', country: 'Syria', flag: '🇸🇾' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+967', country: 'Yemen', flag: '🇾🇪' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+970', country: 'Palestine', flag: '🇵🇸' },
    { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
    { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' }
  ];

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      toast({
        title: "Invalid Password",
        description: "Please enter the correct admin password.",
        variant: "destructive",
      });
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: companiesData, error: companiesError } = await supabase
        .from('companies')
        .select('*')
        .order('created_at', { ascending: false });

      if (companiesError) throw companiesError;

      const { data: membersData, error: membersError } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false });

      if (membersError) throw membersError;

      setCompanies(companiesData || []);
      setTeamMembers(membersData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddCompany = async () => {
    if (!newCompanyName.trim()) {
      toast({
        title: "Error",
        description: "Company name is required.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('companies')
        .insert([{ name: newCompanyName.trim() }])
        .select();

      if (error) throw error;

      setCompanies([data[0], ...companies]);
      setNewCompanyName('');
      setIsAddCompanyOpen(false);
      toast({
        title: "Success",
        description: "Company added successfully.",
      });
    } catch (error) {
      console.error('Error adding company:', error);
      toast({
        title: "Error",
        description: "Failed to add company. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAddMember = async () => {
    if (!newMember.name.trim() || !newMember.email.trim() || !newMember.whatsapp_number.trim() || !newMember.country_code || !newMember.company_id) {
      toast({
        title: "Error",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('team_members')
        .insert([{
          name: newMember.name.trim(),
          email: newMember.email.trim(),
          whatsapp_number: `${newMember.country_code} ${newMember.whatsapp_number.trim()}`,
          company_id: newMember.company_id
        }])
        .select();

      if (error) throw error;

      // Get company name for email
      const company = companies.find(c => c.id === newMember.company_id);
      const companyName = company ? company.name : 'Your Company';

      // Send welcome email in background
      try {
        await supabase.functions.invoke('send-team-member-welcome', {
          body: {
            email: newMember.email.trim(),
            name: newMember.name.trim(),
            companyName: companyName
          },
        });
        console.log('Team member welcome email sent successfully');
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the entire operation if email fails
      }

      setTeamMembers([data[0], ...teamMembers]);
      setNewMember({ name: '', email: '', whatsapp_number: '', country_code: '+1', company_id: '' });
      setIsAddMemberOpen(false);
      toast({
        title: "Success",
        description: "Team member added successfully and welcome email sent.",
      });
    } catch (error) {
      console.error('Error adding team member:', error);
      toast({
        title: "Error",
        description: "Failed to add team member. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteCompany = async (companyId: string) => {
    if (!confirm('Are you sure you want to delete this company? This will also delete all associated team members.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('companies')
        .delete()
        .eq('id', companyId);

      if (error) throw error;

      setCompanies(companies.filter(c => c.id !== companyId));
      setTeamMembers(teamMembers.filter(m => m.company_id !== companyId));
      toast({
        title: "Success",
        description: "Company deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting company:', error);
      toast({
        title: "Error",
        description: "Failed to delete company. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteMember = async (memberId: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', memberId);

      if (error) throw error;

      setTeamMembers(teamMembers.filter(m => m.id !== memberId));
      toast({
        title: "Success",
        description: "Team member deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting team member:', error);
      toast({
        title: "Error",
        description: "Failed to delete team member. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center bg-background">
        {/* Hero-style background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
        
        <FloatingLinkedInLogos />

        <div className="relative z-10 w-full max-w-sm mx-auto px-4">
          <Card className="w-full backdrop-blur-sm bg-white/90 border-0 shadow-2xl">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-3 flex items-center gap-1">
                <img 
                  src={craftedLogo} 
                  alt="Crafted logo" 
                  className="w-8 h-8"
                />
                <span className="text-lg sm:text-xl crafted-brand">Crafted</span>
              </div>
              <CardTitle className="text-lg font-ultra-thick">Admin Access</CardTitle>
              <CardDescription className="text-sm">
                Enter the admin password to access the management panel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="password" className="text-xs font-semibold">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="Enter admin password"
                  className="h-8 text-sm"
                />
              </div>
              <Button onClick={handleLogin} className="w-full h-8 text-sm font-semibold">
                Access Admin Panel
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-background">
      {/* Hero-style background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <FloatingLinkedInLogos />

      <div className="relative z-10 p-3">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-center sm:justify-start gap-1 mb-3">
              <img 
                src={craftedLogo} 
                alt="Crafted logo" 
                className="w-8 h-8"
              />
              <span className="text-lg sm:text-xl crafted-brand">Crafted</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-ultra-thick text-foreground mb-2 text-center">
              Admin Panel
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Manage companies and team members
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Companies Section */}
            <div>
              <div className="mb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-lg bg-primary/10">
                      <Building2 className="h-3 w-3 text-primary" />
                    </div>
                    <h2 className="text-lg font-ultra-thick text-foreground">Companies</h2>
                    <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold text-xs">{filteredCompanies.length}</Badge>
                  </div>
                  <Dialog open={isAddCompanyOpen} onOpenChange={setIsAddCompanyOpen}>
                    <DialogTrigger asChild>
                      <Button className="font-semibold text-xs h-6">
                        <Plus className="h-2 w-2 mr-1" />
                        Add Company
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="backdrop-blur-sm bg-white/95">
                      <DialogHeader>
                        <DialogTitle className="font-ultra-thick text-lg">Add New Company</DialogTitle>
                        <DialogDescription className="text-sm">
                          Create a new company in the system.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-2">
                        <div>
                          <Label htmlFor="company-name" className="text-xs">Company Name</Label>
                          <Input
                            id="company-name"
                            value={newCompanyName}
                            onChange={(e) => setNewCompanyName(e.target.value)}
                            placeholder="Enter company name"
                            className="h-8 text-sm"
                          />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setIsAddCompanyOpen(false)} className="font-semibold text-xs h-6">
                            Cancel
                          </Button>
                          <Button onClick={handleAddCompany} className="font-semibold text-xs h-6">
                            Add Company
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Input
                  placeholder="Search companies..."
                  value={companySearch}
                  onChange={(e) => setCompanySearch(e.target.value)}
                  className="h-8 text-sm relative z-20"
                />
              </div>

              <div className="mt-3 space-y-2 relative z-10">
                {loading ? (
                  <div className="text-center py-4 text-muted-foreground text-sm">Loading...</div>
                ) : filteredCompanies.length === 0 ? (
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg relative z-10">
                    <CardContent className="text-center py-6">
                      <div className="p-2 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {companySearch ? 'No companies match your search.' : 'No companies found. Add your first company to get started.'}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredCompanies.map((company) => (
                    <Card key={company.id} className="backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                      <CardContent className="p-2">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-ultra-thick text-foreground text-sm">{company.name}</h3>
                              <span className="text-xs text-muted-foreground">
                                {teamMembers.filter(m => m.company_id === company.id).length} members
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Created: {new Date(company.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteCompany(company.id)}
                            className="ml-2 h-6 w-6 p-0"
                          >
                            <Trash2 className="h-2 w-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>

             {/* Team Members Section */}
             <div>
               <div className="mb-2">
                 <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-1.5">
                     <div className="p-1 rounded-lg bg-primary/10">
                       <Users className="h-3 w-3 text-primary" />
                     </div>
                     <h2 className="text-lg font-ultra-thick text-foreground">Team Members</h2>
                     <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold text-xs">{filteredTeamMembers.length}</Badge>
                   </div>
                   <Dialog open={isAddMemberOpen} onOpenChange={setIsAddMemberOpen}>
                     <DialogTrigger asChild>
                       <Button className="font-semibold text-xs h-6">
                         <Plus className="h-2 w-2 mr-1" />
                         Add Member
                       </Button>
                     </DialogTrigger>
                  <DialogContent className="backdrop-blur-sm bg-white/95">
                    <DialogHeader>
                      <DialogTitle className="font-ultra-thick text-lg">Add New Team Member</DialogTitle>
                      <DialogDescription className="text-sm">
                        Add a new team member to a company.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2">
                      <div>
                        <Label htmlFor="member-company" className="text-xs">Company</Label>
                        <select
                          id="member-company"
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={newMember.company_id}
                          onChange={(e) => setNewMember({ ...newMember, company_id: e.target.value })}
                        >
                          <option value="">Select a company</option>
                          {companies.map((company) => (
                            <option key={company.id} value={company.id}>
                              {company.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="member-name" className="text-xs">Name</Label>
                        <Input
                          id="member-name"
                          value={newMember.name}
                          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                          placeholder="Enter full name"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="member-email" className="text-xs">Email</Label>
                        <Input
                          id="member-email"
                          type="email"
                          value={newMember.email}
                          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                          placeholder="Enter email address"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="member-whatsapp" className="text-xs">WhatsApp Number</Label>
                        <div className="flex gap-1">
                          <Popover open={isCountryOpen} onOpenChange={setIsCountryOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={isCountryOpen}
                                className="w-[100px] justify-between h-8 text-xs"
                              >
                                {newMember.country_code ? (
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs">{countryCodes.find((country) => country.code === newMember.country_code)?.flag}</span>
                                    <span className="text-xs">{newMember.country_code}</span>
                                  </div>
                                ) : (
                                  "Select..."
                                )}
                                <ChevronsUpDown className="ml-1 h-2 w-2 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                              <Command>
                                <CommandInput placeholder="Search countries..." className="text-xs" />
                                <CommandEmpty>No country found.</CommandEmpty>
                                <CommandList>
                                  <CommandGroup>
                                    {countryCodes.map((country) => (
                                      <CommandItem
                                        key={`${country.code}-${country.country}`}
                                        value={`${country.country} ${country.code}`}
                                        onSelect={() => {
                                          setNewMember({ ...newMember, country_code: country.code });
                                          setIsCountryOpen(false);
                                        }}
                                        className="text-xs"
                                      >
                                        <Check
                                          className={`mr-1 h-2 w-2 ${
                                            newMember.country_code === country.code ? "opacity-100" : "opacity-0"
                                          }`}
                                        />
                                        <span className="mr-1 text-xs">{country.flag}</span>
                                        <span className="mr-1 font-mono text-xs">{country.code}</span>
                                        <span className="text-xs">{country.country}</span>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <Input
                            id="member-whatsapp"
                            value={newMember.whatsapp_number}
                            onChange={(e) => setNewMember({ ...newMember, whatsapp_number: e.target.value })}
                            placeholder="Enter phone number"
                            className="flex-1 h-8 text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsAddMemberOpen(false)} className="font-semibold text-xs h-6">
                          Cancel
                        </Button>
                        <Button onClick={handleAddMember} className="font-semibold text-xs h-6">
                          Add Member
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <Input
                placeholder="Search team members..."
                value={memberSearch}
                onChange={(e) => setMemberSearch(e.target.value)}
                className="h-8 text-sm relative z-20"
              />

              <div className="mt-3 space-y-2 relative z-10">
                {loading ? (
                  <div className="text-center py-4 text-muted-foreground text-sm">Loading...</div>
                ) : filteredTeamMembers.length === 0 ? (
                  <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-lg relative z-10">
                    <CardContent className="text-center py-6">
                      <div className="p-2 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {memberSearch ? 'No team members match your search.' : 'No team members found. Add your first team member to get started.'}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredTeamMembers.map((member) => {
                    const company = companies.find(c => c.id === member.company_id);
                    return (
                      <Card key={member.id} className="backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                        <CardContent className="p-2">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h3 className="font-ultra-thick text-foreground text-sm">{member.name}</h3>
                                <span className="text-xs text-primary font-semibold">
                                  {company ? company.name : 'Unknown Company'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">{member.email}</p>
                                <p className="text-xs text-muted-foreground">{member.whatsapp_number}</p>
                              </div>
                            </div>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteMember(member.id)}
                              className="ml-2 h-6 w-6 p-0"
                            >
                              <Trash2 className="h-2 w-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
