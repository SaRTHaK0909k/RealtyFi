'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPortfolio } from '@/components/user-portfolio';
import { PropertyManagement } from '@/components/property-management';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();



  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }


  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Welcome back</p>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Signed in as {user?.email}</p>
        </div>

        <div className="space-y-8">
          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="portfolio" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-muted/60 p-1 shadow-sm">
              <TabsTrigger value="portfolio" className="rounded-xl data-[state=active]:bg-background data-[state=active]:text-foreground">
                Portfolio
              </TabsTrigger>
              <TabsTrigger value="manage" className="rounded-xl data-[state=active]:bg-background data-[state=active]:text-foreground">
                Manage Properties
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="portfolio" className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <UserPortfolio />
            </TabsContent>
            
            <TabsContent value="manage" className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <PropertyManagement />
            </TabsContent>
          </Tabs>

          {/* Account Information */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card className='rounded-2xl border border-border/70 shadow-sm'>
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Email: {user?.email}</p>
              </CardContent>
            </Card>

            <Card className='rounded-2xl border border-border/70 shadow-sm'>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No recent activity</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 