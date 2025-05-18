import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Button,
} from "@/components/ui";

interface DialogDeleteUserProps {
  isOpen: boolean;
  isLoading: boolean;
  close: () => void;
  onSubmit: () => void | Promise<void>;
}

export function DialogDeleteUser({
  isOpen,
  isLoading,
  onSubmit,
  close,
}: DialogDeleteUserProps) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Excluír usuário</DialogTitle>
          <DialogDescription>
            Ao prosseguir com essa ação o usuário será excluído permanentemente,
            deseja continuar?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant={"outline"}>
              Voltar
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant={"destructive"}
            onClick={onSubmit}
            isLoading={isLoading}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
