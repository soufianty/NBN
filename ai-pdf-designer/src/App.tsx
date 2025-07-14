import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { 
  FileText, Save, Download, Print, Share, Eye, Maximize, 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Image, Table, Link, Palette, Type, Sparkles,
  Moon, Sun, Globe, Settings, Plus, Search, Wand2, Brain, Zap,
  Languages, Layout, FileImage, Briefcase, ScrollText, Calculator,
  PresentationChart, Contract, BookOpen, UserCheck, Copy, RotateCcw,
  MoreHorizontal, FolderOpen, Star, Clock, MessageSquare
} from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './i18n';

interface Template {
  id: string;
  name: string;
  icon: React.ReactNode;
  content: string;
  category: string;
}

const templates: Template[] = [
  {
    id: 'blank',
    name: 'blank_document',
    icon: <FileText className="w-6 h-6" />,
    content: '',
    category: 'general'
  },
  {
    id: 'business-letter',
    name: 'business_letter',
    icon: <Briefcase className="w-6 h-6" />,
    content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 40px;">
<div style="text-align: right; margin-bottom: 40px;">
<p>[Your Name]<br/>
[Your Address]<br/>
[City, State ZIP Code]<br/>
[Email Address]<br/>
[Phone Number]</p>
<p>[Date]</p>
</div>

<div style="margin-bottom: 30px;">
<p>[Recipient Name]<br/>
[Title]<br/>
[Company Name]<br/>
[Address]<br/>
[City, State ZIP Code]</p>
</div>

<p>Dear [Recipient Name],</p>

<p>I am writing to [state your purpose clearly and concisely]. This letter is to [explain the reason for writing].</p>

<p>[Body paragraph 1 - Provide details and context]</p>

<p>[Body paragraph 2 - Additional information or supporting details]</p>

<p>Thank you for your time and consideration. I look forward to [next steps or desired outcome].</p>

<p>Sincerely,<br/>
[Your Name]</p>
</div>`,
    category: 'business'
  },
  {
    id: 'resume',
    name: 'resume',
    icon: <UserCheck className="w-6 h-6" />,
    content: `<div style="font-family: Arial, sans-serif; line-height: 1.5; margin: 30px;">
<div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px;">
<h1 style="margin: 0; font-size: 32px; color: #333;">[Your Full Name]</h1>
<p style="margin: 5px 0; color: #666;">[Your Email] | [Your Phone] | [Your Address] | [LinkedIn Profile]</p>
</div>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Professional Summary</h2>
<p>[Write a brief summary of your professional background and key qualifications]</p>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Work Experience</h2>
<div style="margin-bottom: 20px;">
<h3 style="margin: 0; color: #333;">[Job Title] - [Company Name]</h3>
<p style="margin: 5px 0; color: #666; font-style: italic;">[Start Date] - [End Date]</p>
<ul>
<li>[Key achievement or responsibility]</li>
<li>[Key achievement or responsibility]</li>
<li>[Key achievement or responsibility]</li>
</ul>
</div>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Education</h2>
<div style="margin-bottom: 20px;">
<h3 style="margin: 0; color: #333;">[Degree] - [Institution Name]</h3>
<p style="margin: 5px 0; color: #666; font-style: italic;">[Graduation Year]</p>
</div>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Skills</h2>
<p>[List your relevant skills separated by commas]</p>
</div>`,
    category: 'personal'
  },
  {
    id: 'invoice',
    name: 'invoice',
    icon: <Calculator className="w-6 h-6" />,
    content: `<div style="font-family: Arial, sans-serif; margin: 40px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 3px solid #007acc; padding-bottom: 20px;">
<h1 style="color: #007acc; margin: 0; font-size: 36px;">INVOICE</h1>
<div style="text-align: right;">
<p style="margin: 0; font-size: 18px; font-weight: bold;">Invoice #: [INV-001]</p>
<p style="margin: 5px 0;">Date: [Current Date]</p>
<p style="margin: 0;">Due Date: [Due Date]</p>
</div>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 40px;">
<div>
<h3 style="color: #333; margin-bottom: 10px;">From:</h3>
<p>[Your Company Name]<br/>
[Your Address]<br/>
[City, State ZIP]<br/>
[Email] | [Phone]</p>
</div>
<div>
<h3 style="color: #333; margin-bottom: 10px;">To:</h3>
<p>[Client Company Name]<br/>
[Client Address]<br/>
[City, State ZIP]<br/>
[Client Email]</p>
</div>
</div>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
<thead>
<tr style="background-color: #007acc; color: white;">
<th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Description</th>
<th style="padding: 12px; text-align: center; border: 1px solid #ddd;">Quantity</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Rate</th>
<th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 12px; border: 1px solid #ddd;">[Service/Product Description]</td>
<td style="padding: 12px; text-align: center; border: 1px solid #ddd;">[1]</td>
<td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$[Rate]</td>
<td style="padding: 12px; text-align: right; border: 1px solid #ddd;">$[Amount]</td>
</tr>
</tbody>
</table>

<div style="text-align: right; margin-top: 30px;">
<p style="margin: 5px 0; font-size: 18px;"><strong>Subtotal: $[Subtotal]</strong></p>
<p style="margin: 5px 0;">Tax (0%): $0.00</p>
<p style="margin: 10px 0; font-size: 20px; color: #007acc;"><strong>Total: $[Total]</strong></p>
</div>

<div style="margin-top: 40px; padding: 20px; background-color: #f8f9fa; border-radius: 5px;">
<h3 style="color: #333; margin-bottom: 10px;">Payment Terms</h3>
<p style="margin: 0;">Payment is due within 30 days of invoice date. Please include invoice number on payment.</p>
</div>
</div>`,
    category: 'business'
  },
  {
    id: 'report',
    name: 'report',
    icon: <ScrollText className="w-6 h-6" />,
    content: `<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 40px;">
<div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #333; padding-bottom: 20px;">
<h1 style="margin: 0; font-size: 28px; color: #333;">[REPORT TITLE]</h1>
<p style="margin: 10px 0; color: #666;">Prepared by: [Your Name]</p>
<p style="margin: 0; color: #666;">Date: [Current Date]</p>
</div>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Executive Summary</h2>
<p>[Provide a brief overview of the report's key findings and recommendations]</p>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Introduction</h2>
<p>[Explain the purpose and scope of the report]</p>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Methodology</h2>
<p>[Describe the methods used to gather and analyze information]</p>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Findings</h2>
<h3>Key Finding 1</h3>
<p>[Detailed explanation of the first key finding]</p>

<h3>Key Finding 2</h3>
<p>[Detailed explanation of the second key finding]</p>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Recommendations</h2>
<ol>
<li>[First recommendation with supporting rationale]</li>
<li>[Second recommendation with supporting rationale]</li>
<li>[Third recommendation with supporting rationale]</li>
</ol>

<h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Conclusion</h2>
<p>[Summarize the main points and emphasize the importance of the recommendations]</p>
</div>`,
    category: 'business'
  }
];

export default function App() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [documentContent, setDocumentContent] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [recentDocuments, setRecentDocuments] = useState<Array<{id: string, title: string, date: string}>>([]);
  const [isSaving, setIsSaving] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState('14');
  const [fontFamily, setFontFamily] = useState('Arial');

  // RTL languages
  const rtlLanguages = ['ar', 'he', 'fa'];
  const isRTL = rtlLanguages.includes(currentLanguage);

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.className = darkMode ? 'dark' : '';
  }, [isRTL, darkMode]);



  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const filteredTemplates = templates.filter(template => 
    t(template.name).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setDocumentContent(template.content);
    if (editorRef.current) {
      editorRef.current.innerHTML = template.content;
    }
  };

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setDocumentContent(editorRef.current.innerHTML);
    }
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      setSelectedText(selection.toString().trim());
    } else {
      setSelectedText('');
    }
  };

  const saveDocument = async () => {
    if (!documentTitle.trim() || !documentContent.trim()) return;
    
    setIsSaving(true);
    
    // Simulate saving
    setTimeout(() => {
      const newDoc = {
        id: Date.now().toString(),
        title: documentTitle,
        date: new Date().toLocaleDateString()
      };
      
      setRecentDocuments(prev => [newDoc, ...prev.slice(0, 4)]);
      setIsSaving(false);
      
      // Show success message (in a real app, you might use a toast)
      console.log('Document saved successfully');
    }, 1000);
  };

  const handleAIContentGenerated = (content: string) => {
    if (editorRef.current) {
      // Insert AI content at cursor position or append to end
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        const div = document.createElement('div');
        div.innerHTML = content;
        range.insertNode(div);
      } else {
        editorRef.current.innerHTML += content;
      }
      setDocumentContent(editorRef.current.innerHTML);
    }
  };

  const copyToClipboard = async () => {
    if (selectedText) {
      try {
        await navigator.clipboard.writeText(selectedText);
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
    }
  };

  const exportToPDF = async () => {
    if (!editorRef.current) return;
    
    try {
      const canvas = await html2canvas(editorRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${documentTitle || 'document'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };



  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FileText className="w-8 h-8 text-primary" />
                <h1 className="text-xl font-bold">{t('ai_pdf_designer')}</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <Select value={currentLanguage} onValueChange={changeLanguage}>
                <SelectTrigger className="w-[120px]">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="hi">हिन्दी</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <aside className="w-80 border-r border-border bg-card">
          <div className="p-4">
            <Tabs defaultValue="templates">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="templates">{t('templates')}</TabsTrigger>
                <TabsTrigger value="recent">
                  <Clock className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="ai">
                  <Sparkles className="w-4 h-4" />
                </TabsTrigger>
                <TabsTrigger value="tools">
                  <Settings className="w-4 h-4" />
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="templates" className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder={t('search_templates')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {filteredTemplates.map((template) => (
                    <Card 
                      key={template.id} 
                      className={`cursor-pointer transition-colors hover:bg-accent ${
                        selectedTemplate?.id === template.id ? 'bg-accent' : ''
                      }`}
                      onClick={() => selectTemplate(template)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          {template.icon}
                          <span className="font-medium">{t(template.name)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="recent" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      {t('my_documents')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recentDocuments.length > 0 ? (
                      <div className="space-y-2">
                        {recentDocuments.map((doc) => (
                          <Card key={doc.id} className="cursor-pointer hover:bg-accent transition-colors">
                            <CardContent className="p-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-medium text-sm">{doc.title}</div>
                                  <div className="text-xs text-muted-foreground">{doc.date}</div>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <FolderOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                        <p className="text-sm">No recent documents</p>
                        <p className="text-xs">Start creating to see your work here</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ai" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      {t('ai_assistant')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Quick Actions</Label>
                      <div className="grid grid-cols-1 gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="justify-start"
                          onClick={() => handleAIContentGenerated(`<div class="ai-generated"><h3>Business Email Template</h3><p><strong>Subject:</strong> [Your Subject]</p><br/><p>Dear [Recipient],</p><p>I hope this message finds you well. I am writing to [purpose].</p><p>[Main content]</p><p>Thank you for your time and consideration.</p><p>Best regards,<br/>[Your Name]</p></div>`)}
                        >
                          <Briefcase className="w-4 h-4 mr-2" />
                          Generate Business Email
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="justify-start"
                          onClick={() => handleAIContentGenerated(`<div class="ai-generated"><h3>Meeting Summary</h3><p><strong>Date:</strong> [Date]</p><p><strong>Attendees:</strong> [Names]</p><h4>Key Points:</h4><ul><li>[Point 1]</li><li>[Point 2]</li></ul><h4>Action Items:</h4><ol><li>[Action 1]</li><li>[Action 2]</li></ol></div>`)}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Create Meeting Summary
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="justify-start"
                          onClick={() => handleAIContentGenerated(`<div class="ai-generated"><h3>Professional Report</h3><h4>Executive Summary</h4><p>[Brief overview]</p><h4>Introduction</h4><p>[Purpose and scope]</p><h4>Findings</h4><p>[Key findings]</p><h4>Recommendations</h4><ol><li>[Recommendation 1]</li><li>[Recommendation 2]</li></ol></div>`)}
                        >
                          <ScrollText className="w-4 h-4 mr-2" />
                          Generate Report Structure
                        </Button>
                      </div>
                    </div>
                    
                    {selectedText && (
                      <div className="space-y-2">
                        <Label>Text Enhancement</Label>
                        <div className="text-xs text-muted-foreground mb-2">
                          Selected: "{selectedText.substring(0, 50)}..."
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleAIContentGenerated(`<div class="ai-improved"><h4>Improved Text</h4><p>Enhanced version: ${selectedText}</p><p>[This would be an improved version with better clarity and structure]</p></div>`)}
                          >
                            <Zap className="w-4 h-4 mr-2" />
                            {t('improve_text')}
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleAIContentGenerated(`<div class="ai-summary"><h4>Summary</h4><p>Original: ${selectedText}</p><p>[This would be a concise summary of the selected text]</p></div>`)}
                          >
                            <BookOpen className="w-4 h-4 mr-2" />
                            {t('summarize')}
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tools" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('settings')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>{t('font_family')}</Label>
                      <Select value={fontFamily} onValueChange={setFontFamily}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Arial">Arial</SelectItem>
                          <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                          <SelectItem value="Helvetica">Helvetica</SelectItem>
                          <SelectItem value="Georgia">Georgia</SelectItem>
                          <SelectItem value="Verdana">Verdana</SelectItem>
                          {isRTL && (
                            <>
                              <SelectItem value="Amiri">Amiri</SelectItem>
                              <SelectItem value="Cairo">Cairo</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>{t('font_size')}</Label>
                      <Select value={fontSize} onValueChange={setFontSize}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12">12px</SelectItem>
                          <SelectItem value="14">14px</SelectItem>
                          <SelectItem value="16">16px</SelectItem>
                          <SelectItem value="18">18px</SelectItem>
                          <SelectItem value="20">20px</SelectItem>
                          <SelectItem value="24">24px</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="border-b border-border bg-card p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input
                  placeholder={t('document_title')}
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  className="w-60"
                />
              </div>
              
              <div className="flex items-center gap-2">
                {/* Text Formatting */}
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" onClick={() => formatText('bold')}>
                    <Bold className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon" onClick={() => formatText('italic')}>
                    <Italic className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon" onClick={() => formatText('underline')}>
                    <Underline className="w-4 h-4" />
                  </Button>
                </div>
                
                <Separator orientation="vertical" className="h-6" />
                
                {/* Alignment */}
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" onClick={() => formatText('justifyLeft')}>
                    <AlignLeft className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon" onClick={() => formatText('justifyCenter')}>
                    <AlignCenter className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon" onClick={() => formatText('justifyRight')}>
                    <AlignRight className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon" onClick={() => formatText('justifyFull')}>
                    <AlignJustify className="w-4 h-4" />
                  </Button>
                </div>
                
                <Separator orientation="vertical" className="h-6" />
                
                {/* Lists */}
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" onClick={() => formatText('insertUnorderedList')}>
                    <List className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="outline" size="icon" onClick={() => formatText('insertOrderedList')}>
                    <ListOrdered className="w-4 h-4" />
                  </Button>
                </div>
                
                <Separator orientation="vertical" className="h-6" />
                
                {/* Selection Actions */}
                {selectedText && (
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" onClick={copyToClipboard}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    
                    <Badge variant="secondary" className="text-xs">
                      {selectedText.length} chars selected
                    </Badge>
                    
                    <Separator orientation="vertical" className="h-6" />
                  </div>
                )}
                
                {/* Document Actions */}
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    onClick={saveDocument}
                    disabled={isSaving || !documentTitle.trim()}
                  >
                    {isSaving ? (
                      <><Clock className="w-4 h-4 mr-2 animate-spin" />Saving...</>
                    ) : (
                      <><Save className="w-4 h-4 mr-2" />{t('save')}</>
                    )}
                  </Button>
                  
                  <Button onClick={exportToPDF}>
                    <Download className="w-4 h-4 mr-2" />
                    {t('export_pdf')}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 p-8 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg min-h-[800px] p-12">
                {selectedTemplate ? (
                  <div
                    ref={editorRef}
                    contentEditable
                    className="min-h-full outline-none editor-content focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded-lg p-4"
                    style={{
                      fontFamily: fontFamily,
                      fontSize: `${fontSize}px`,
                      lineHeight: '1.6'
                    }}
                    onInput={(e) => setDocumentContent(e.currentTarget.innerHTML)}
                    onMouseUp={handleTextSelection}
                    onKeyUp={handleTextSelection}
                    onFocus={handleTextSelection}
                    dangerouslySetInnerHTML={{ __html: documentContent }}
                    data-placeholder={t('start_typing')}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    <div className="text-center">
                      <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                      <p className="text-lg">{t('select_template')}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
