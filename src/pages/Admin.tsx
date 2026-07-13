import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { User, FileText, Calendar, Newspaper } from "lucide-react";

const Admin = () => {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-white border-b">
        <div className="container flex items-center justify-between h-16">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={signOut}>Sign out</Button>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Welcome back</h2>
          <p className="text-muted-foreground">
            {isAdmin ? "Manage your profile and site content." : "Manage your profile."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/admin/profile">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <User className="h-6 w-6 text-primary mb-2" />
                <CardTitle>My Profile</CardTitle>
                <CardDescription>Update your display name, avatar, and bio.</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {isAdmin && (
            <>
              <Card className="opacity-60">
                <CardHeader>
                  <Newspaper className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>News</CardTitle>
                  <CardDescription>Manage news posts (coming soon).</CardDescription>
                </CardHeader>
              </Card>
              <Card className="opacity-60">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Events</CardTitle>
                  <CardDescription>Manage events (coming soon).</CardDescription>
                </CardHeader>
              </Card>
              <Card className="opacity-60">
                <CardHeader>
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Sermons</CardTitle>
                  <CardDescription>Manage sermons (coming soon).</CardDescription>
                </CardHeader>
              </Card>
            </>
          )}
        </div>

        {!isAdmin && (
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              You're signed in as a standard user. Content management tools appear here once an admin grants you the admin role.
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Admin;
